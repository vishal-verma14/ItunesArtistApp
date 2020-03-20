function isRequired(inputText) {
  if (inputText.value.length === 0) {
    this.setState({
      isRequired: {
        text: inputText.value,
        isValid: false,
        message: 'Please Fill Input Box',
      },
    });
    return false;
  } else {
    this.setState({
      isRequired: {
        text: inputText.value,
        isValid: true,
        message: '',
      },
    });
    return true;
  }
}

module.exports = {
  isRequired,
};
