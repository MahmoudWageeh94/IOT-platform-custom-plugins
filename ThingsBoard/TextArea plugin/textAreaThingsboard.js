self.onInit = function() {
    var textArea = document.getElementById('textArea');
  var selectedValue = document.getElementsByTagName('select');
  var fontColor = document.getElementById('fontColor');
  var backgroundColor = document.getElementById('backgroundColor');
  var myContainer = document.getElementById('myContainer');
      myContainer.style.width = self.ctx.settings.width + 'px';
      myContainer.style.height = self.ctx.settings.height + 'px';
  textArea.setAttribute('placeholder', 'Enter your text....');
  selectedValue[4].addEventListener('change', (e) => {
      textArea.style.direction = selectedValue[4].value;
      if (selectedValue[4].value == 'rtl') {
          textArea.setAttribute('placeholder', "قم بإدخال النص...");
      }else{
          textArea.setAttribute('placeholder', 'Enter your text....');
      }
      });
  fontColor.addEventListener('change',function(){
      textArea.style.color = fontColor.value;
  })
  backgroundColor.addEventListener('change',function(){
      textArea.style.backgroundColor = backgroundColor.value;
  })
  selectedValue[0].addEventListener('change', (e) => {
  textArea.style.fontSize = selectedValue[0].value + 'px';
  });
  selectedValue[2].addEventListener('change', (e) => {
  textArea.style.fontStyle = selectedValue[2].value;
  });
  selectedValue[1].addEventListener('change', (e) => {
  textArea.style.fontWeight = selectedValue[1].value || selectedValue[1].value + 'px';
  });
  selectedValue[3].addEventListener('change', (e) => {
  textArea.style.fontFamily = selectedValue[3].value;
  });
  
  
  }
  
  self.onDestroy = function() {
  }
  