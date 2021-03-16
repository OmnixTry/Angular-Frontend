INSERT INTO Statuses 
VALUES ('New'),
	('Paid'), 
	('Shipped'),
	('Delivered'),
	('Closed')

INSERT INTO Categories
VALUES ('Foods'),
	('Drinks')

USE [Store]
GO

INSERT INTO [dbo].[Customers]
           ([Name]
           ,[Address]
           ,[CreatedDate])
     VALUES
           ('Madonna'
           ,'USA'
           ,GETDATE()),
           ('Miley Cyrus'
           ,'Malibu'
           ,GETDATE()),
           ('Stevie Nicks'
           ,'Rock Place'
           , GETDATE())
GO

USE [Store]
GO

INSERT INTO [dbo].[Products]
           ([ProductName]
           ,[AvailableQuantity]
           ,[Price]
           ,[CreationDate]
           ,[Description]
           ,[CategoryId])
     VALUES
           ('Pepsi'
           ,1000
           ,10
           ,GETDATE()
           ,'Nice Drincc'
           ,2),
           ('Sproot'
           ,2000
           ,15
           ,GETDATE()
           ,'Nice Drincc Too'
           ,2),
           ('Onion'
           ,500
           ,5
           ,GETDATE()
           ,'Bitter Vegetable'
           ,1)
GO

USE [Store]
GO

INSERT INTO [dbo].[Orders]
           ([Comment]
           ,[StatusId]
           ,[CustomerId]
           ,[CreatedDate])
     VALUES
           ('Make Fast'
           ,1
           ,5 
           ,GETDATE()),
           ('No'
           ,1
           ,6 
           ,GETDATE())

GO

USE [Store]
GO

INSERT INTO [dbo].[OrderDetails]
           ([ProductId]
           ,[OrderId]
           ,[Quantity])
     VALUES
           (1 --<ProductId, int,>
           ,3 --<OrderId, int,>
           ,10), --<Quantity, int,>)
           (2 --<ProductId, int,>
           ,3 --<OrderId, int,>
           ,20), --<Quantity, int,>)
           (3 --<ProductId, int,>
           ,4 --<OrderId, int,>
           ,50) --<Quantity, int,>)
GO


select * from Products
SELECT * FROM Categories
SELECT * FROM Customers
SELECT * FROM Orders
SELECT * FROM OrderDetails
DELETE FROM Customers
  select * from Statuses
