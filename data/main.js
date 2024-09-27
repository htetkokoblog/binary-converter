app.controller('converter',function($scope){
  $scope.textToBinary = function (text){
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  };
  $scope.binaryToText = function (binary){
    return binary
    .split(' ')
    .map(b => String.fromCharCode(parseInt(b, 2)))
    .join('');
  };
  $scope.convert = function(txt){
    if (/^[01\s]+$/.test(txt.trim())) {
      // It looks like binary code
      const convertedText = $scope.binaryToText(txt.trim());
      $scope.result = convertedText;
      $scope.convertedMessage = 'Converted Text √';
    } else {
      // It's regular text, convert to binary
      const binaryCode = $scope.textToBinary(txt);
      $scope.result = binaryCode;
      $scope.convertedMessage = 'Converted Binary Code √';
    }
    if (txt === '') {
      $scope.convertedMessage = '';
    }
  };
  $scope.copy = function(copyTxt) {
    navigator.clipboard.writeText(copyTxt)
      .then(() => {
        alert('Success Copy : ',copyTxt);
      });
  };
  $scope.shareTxt = function(txt) {
    if (navigator.share) {
      navigator.share({ text: txt });
    } else {
      alert('Web Share API is not supported in this browser.');
    }
  };
})
