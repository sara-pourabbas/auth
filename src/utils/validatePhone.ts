const validatePhone = (phone: string) => {
  const regex = /^09\d{9}$/;
  return regex.test(phone);
};

export default validatePhone;
