> # Routes for Pizeria v2.1 [![DeepScan grade](https://deepscan.io/api/teams/21623/projects/25015/branches/776351/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21623&pid=25015&bid=776351)
> https://pizeriabackend.onrender.com
> ###  I used JWT token for verify whether the user is Signed In or not.

## SignUp
* post request -https://pizeriabackend.onrender.com/api/auth/signup with 
```json
  {
        "userName": "Vansh",
        "password": "Vansh1190"
}
```

## SignIn
* post request -https://pizeriabackend.onrender.com/api/auth/signin with 
```json
  {
        "userName": "Vansh",
        "password": "Vansh1190"
}
This returns an jwt token.
``` 

## For adding new Pizza item in Menu.
* post request -https://pizeriabackend.onrender.com/api/pizza/menu/add with 
```json
 {
        "name": "Farm House",
       "ingredients": [
      "mozzarella",
      "oregano",
      "paneer",
      "cheese",
      "onion",
      "capsicum"
    ],
        "status": "pending",
        "price": 30
}
```

## For giving Order.
* post request -https://pizeriabackend.onrender.com/api/orders/ with
Inside Body -
```json
{
        "name": "Sumit",
        "orderedItems": ["Pizza Bianca", "Romana"],
        "status":"pending"
}
```
along with Header
```
token: {token}(issued to user while signup)
```

## For seeing all the orders that are pending (for staff)
* get req -> https://pizeriabackend.onrender.com/api/orders/ with
along with Header
```
token: {token}(issued to user while signup)
```

## For track a specific order
* get req -> https://pizeriabackend.onrender.com/api/order/[id]
along with Header
```
token: {token}(issued to user while signup)
```

## For seeing the Menu
* get req -> https://pizeriabackend.onrender.com/api/pizza/menu
