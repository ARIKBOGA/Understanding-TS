function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
  
    if (passwordInput && passwordInput.type === 'password') {
      passwordInput.type = 'text';
      const eyeIcon = document.querySelector('.eye-icon i');
      eyeIcon?.classList.remove('fa-eye');
      eyeIcon?.classList.add('fa-eye-slash');
    } else if (passwordInput && passwordInput.type === 'text') {
      passwordInput.type = 'password';
      const eyeIcon = document.querySelector('.eye-icon i');
      eyeIcon?.classList.remove('fa-eye-slash');
      eyeIcon?.classList.add('fa-eye');
    }
  }