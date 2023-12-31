export const shortAddress = (address, length = 5) => {
    if (!address) return null;
  
    return (
      address.slice(0, length) + "...." + address.slice(address.length - length)
    );
  };
  
  export const shortAddressEnd = (address, length = 10) => {
    if (!address) return null;
  
    return address.slice(0, length) + "....";
  };