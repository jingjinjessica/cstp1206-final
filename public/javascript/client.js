/**/
function validateRegisterForm(event){
    const pwd = document.getElementById("password").value;
    const cpwd = document.getElementById("cpassword").value;
    const name = document.getElementById("name").value;
    // const cemail = document.getElementById("cemail").value;
    const message = document.getElementById("error");
    if (pwd == "" || cpwd == "" || name == "" ){
        message.innerHTML = "password or name can't be empty";
        return false;
    }

    if (pwd !== cpwd){
        message.innerHTML = "password does not match";
        return false;
    }

    return true;
}

// 
function addUploadListener(){
    document.getElementById("myImage").addEventListener('change', (e) =>{
        let reader = new FileReader();
        reader.onload = (e1) =>{
            let imgObj = document.getElementById("mypic");
            imgObj.src = e1.target.result;
            imgObj.onload = (e) =>{
                const c = document.getElementById("c")
                const ctx = c.getContext('2d');
                const curent = e.currentTarget;
                c.width = curent.width;
                c.height = curent.height;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0,0,c.width, c.height);
                ctx.drawImage(curent, 0, 0);
                const hidden = document.getElementById("imageData")
                hidden.value = c.toDataURL("image/jpg");
            }
            
          }
          reader.readAsDataURL(e.target.files[0]);
    });
}
// 
function deletePlant(){
    const form = document.getElementById("editPlantForm");
    form.method = "DELETE";
    return true
}