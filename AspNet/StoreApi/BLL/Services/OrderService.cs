using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL.Services
{
    public class OrderService : ServiceBase, IOrderService
    {
        private IOrderRepository OrderRepository 
        {
            get
            {
                return _unitOfWork.OrderRepository;
            }
        }
        public OrderService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public void AddProductToOrder(int orderId, int productId, int quantity)
        {
            OrderDetailDTO orderDetail = _mapper.Map<OrderDetailDTO>(_unitOfWork.OrderDetaiRepository.FindByIds(productId, orderId));
            if (orderDetail != null)
            {
                ChangeProductQuantity(orderId, productId, quantity);
                return;
            }

            Product pr = _unitOfWork.ProductRepository.GetById(productId);
            ProductDTO product = _mapper.Map<ProductDTO>(pr);
            if (product.AvailableQuantity >= quantity)
            {
                product.AvailableQuantity -= quantity;
                _mapper.Map<ProductDTO, Product>(product, pr);
                _unitOfWork.ProductRepository.Update(pr);
                OrderDetailDTO orderDetailDTO = new OrderDetailDTO()
                {
                    OrderId = orderId,
                    ProductId = productId,
                    Quantity = quantity
                };
                
                _unitOfWork.OrderDetaiRepository.Insert(_mapper.Map<OrderDetail>(orderDetailDTO));
                _unitOfWork.Save();
            }
            else
                throw new InvalidOperationException("Not Enough Items");
        }

        public void ChangeProductQuantity(int orderId, int productId, int newQuantity)
        {
            Product product = _unitOfWork.ProductRepository.GetById(productId);
            ProductDTO productDTO = _mapper.Map<ProductDTO>(product);
            
            OrderDetail orderDetail = _unitOfWork.OrderDetaiRepository.FindByIds(productId, orderId);
            OrderDetailDTO orderDetailDTO = _mapper.Map<OrderDetailDTO>(orderDetail);

            if (orderDetailDTO == null)
                throw new InvalidOperationException("No Such item in the order");
            int delta = newQuantity - orderDetailDTO.Quantity;
            if (newQuantity == 0)
            {
                RemoveProductFromOrder(orderId, productId);
                return;
            }

            if (delta > 0)
                IncreaseQuantity(newQuantity - orderDetailDTO.Quantity);
            else if (orderDetailDTO.Quantity > newQuantity)
                DecreaseQuantity(delta);
                

            orderDetailDTO.Quantity = newQuantity;
            _unitOfWork.ProductRepository.Update(_mapper.Map<ProductDTO, Product>(productDTO, product));
            _unitOfWork.OrderDetaiRepository.Update(_mapper.Map<OrderDetailDTO, OrderDetail>(orderDetailDTO, orderDetail));
            _unitOfWork.Save();

            void IncreaseQuantity(int delta)
            {
                if (productDTO.AvailableQuantity > delta)
                    productDTO.AvailableQuantity -= delta;
                else
                    throw new InvalidOperationException("Not Enough Items");
            }

            void DecreaseQuantity(int delta)
            {
                productDTO.AvailableQuantity -= delta;
            }
            //orderDetail.Quantity;
        }

        public void CreateProduct(OrderDTO toCreate)
        {

            OrderRepository.Insert(_mapper.Map<Order>(toCreate));
        }

        public IEnumerable<ProductDTO> GetOrderProducts(int orderId)
        {
            List<ProductDTO> products = _mapper.Map<List<Product>, List<ProductDTO>>(_unitOfWork.ProductRepository.GetProductsOfTheOrder(orderId));
            List<OrderDetailDTO> orderDetails = _mapper.Map<List<OrderDetail>, List<OrderDetailDTO>>(_unitOfWork.OrderDetaiRepository.FindByOrderId(orderId));
            foreach(ProductDTO product in products)
            {
                product.AvailableQuantity = orderDetails.Where(od => od.ProductId == product.Id).Select(od => od.Quantity).FirstOrDefault();
            }
            return products;
        }

        public void RemoveProductFromOrder(int orderid, int productId)
        {
            OrderDetail orderDetail = _unitOfWork.OrderDetaiRepository.FindByIds(productId, orderid);
            _unitOfWork.OrderDetaiRepository.Delete(orderDetail);
            _unitOfWork.Save();
        }

        public ProductDTO GetOrderProduct(int id, int productId)
        {
            OrderDetail od = _unitOfWork.OrderDetaiRepository.FindByIds(productId, id);
            ProductDTO originalProduct = Map(_unitOfWork.ProductRepository.GetById(productId));
            originalProduct.AvailableQuantity = od.Quantity;
            return originalProduct;
        }

        

        public void Create(OrderDTO toCreate)
        {
            toCreate.Id = 0;
            toCreate.StatusId = 1;
            _unitOfWork.OrderRepository.Insert(Map(toCreate));
            _unitOfWork.Save();
        }

        public IEnumerable<OrderDTO> GetAll()
        {
            return _mapper.Map<IEnumerable<Order>, IEnumerable<OrderDTO>>(_unitOfWork.OrderRepository.FindAll());
        }

        public OrderDTO GetById(int id)
        {
            return Map(_unitOfWork.OrderRepository.GetById(id));
        }
        

        public void Delete(int id)
        {
            _unitOfWork.OrderRepository.Delete(id);
            _unitOfWork.Save();
        }

        public void Update(OrderDTO value)
        {
            _unitOfWork.OrderRepository.Update(Map(value));
            _unitOfWork.Save();
        }

        private Order Map(OrderDTO orderDTO)
        {
            return _mapper.Map<OrderDTO, Order>(orderDTO);
        }
        
        private OrderDTO Map(Order order)
        {
            return _mapper.Map<Order, OrderDTO>(order);
        }

        private ProductDTO Map(Product product)
        {
            return _mapper.Map<Product, ProductDTO>(product);
        }
    }
}
