function formActivate(check, form){
        let j = document.getElementsByClassName(form).length;
        for(let i = 0; i < j; i++){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementsByClassName(form)[i].disabled = "disabled";
        }else{
            document.getElementsByClassName(form)[i].disabled = null;
        }
        }
      }
      
      function formUntick(check, form){
        let j = document.getElementsByClassName(form).length;
        for(let i = 0; i < j; i++){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementsByClassName(form)[i].checked = false;
        }
        }
      }

      function formInactivate(check, form){
        let j = document.getElementsByClassName(form).length;
        for(let i = 0; i < j; i++){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementsByClassName(form)[i].disabled = null;
        }else{
            document.getElementsByClassName(form)[i].disabled = "disabled";
        }
        }
      }
      
      function formDisplay(check, list){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementById(list).style.display = "none";
        }else{
            document.getElementById(list).style.display = "block";
        }
      }
      function formNodisplay(check, list){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementById(list).style.display = "block";
        }else{
            document.getElementById(list).style.display = "none";
        }
      }
      function formDoubleDisplay(checkA, checkB, list){
        if(document.getElementsByName(checkA)[0].checked == false && document.getElementsByName(checkB)[0].checked == false){
            document.getElementById(list).style.display = "none";
        }else{
            document.getElementById(list).style.display = "block";
        }
      }

      /*function switchActivate(check, form, inactive){
          formActivate(check, form);
          let j = document.getElementsByClassName(inactive).length;
          for(let i = 0; i < j; i++){
          if(document.getElementsByName(check)[0].checked == true){
            document.getElementsByClassName(inactive)[i].disabled = "disabled";
        }
      }*/

      function selecterActivate(check, form){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementsByName(form)[0].disabled = null;
            document.getElementsByName(form)[0].selected = "selected";
        }else{
            document.getElementsByName(form)[0].disabled = "disabled";
            document.getElementsByName(form)[0].selected = null;
        }
      }
      
      function selecterInactivate(check, form){
        if(document.getElementsByName(check)[0].checked == false){
            document.getElementsByName(form)[0].disabled = "disabled";
            document.getElementsByName(form)[0].selected = null;
        }else{
            document.getElementsByName(form)[0].disabled = null;
            document.getElementsByName(form)[0].selected = "selected";
        }
      }

      function selecterDoubleInactivate(checkA, checkB, form){
        if(document.getElementsByName(checkA)[0].checked == false && document.getElementsByName(checkB)[0].checked == false){
            document.getElementsByName(form)[0].disabled = "disabled";
            document.getElementsByName(form)[0].selected = null;
        }else{
            document.getElementsByName(form)[0].disabled = null;
            document.getElementsByName(form)[0].selected = "selected";
        }
      }