export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
                                  cartItem.id === cartItemToAdd.id
                                      ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  // cartItems = [{"id": 1, "quantity": 1}, {"id": 2, "quantity": 1}]

  // cartItemToAdd = {"id": 3, "quantity": 1}

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// [] = list

// index: value

// ["1", "2"]

// list[1]

// // 2


// {} = object

// key: value

// {name: "filmon"}

// object.name


// [{},{},{}]

// list[1]

// {"photoIds": ["13244","1233245"]}

// object.photoIds[1]

