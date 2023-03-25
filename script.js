const input = document.querySelectorAll('.controller input');
function handleUpdate(){
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}

input.forEach(input => input.addEventListener('change',handleUpdate));
input.forEach(input => input.addEventListener('mousemove',handleUpdate));
