function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radius= document.querySelector("#radius");
	const volume= document.querySelector("#volume");
	if(parseInt(radius.value)<0) {
		volume.value= NaN;
		return volume.value;
	}
	volume.value= (4/3)*(Math.PI)*(radius.value**3).toFixed(4);
	volume.value= parseFloat(volume.value).toFixed(4);
	return volume.value;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;





