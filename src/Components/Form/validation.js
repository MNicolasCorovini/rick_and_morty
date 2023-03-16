export default function validation (userData, errors, setErrors) 
{
    if (!userData.email)  setErrors({...errors, email: 'Debe rellenar este campo'});
    else if (userData.email.length > 35) return setErrors({...errors, email: 'Se exedio la cantidad de caracteres permitidos'});
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email))) {
        return setErrors({...errors, email: 'Ingrese un email valido'}); }

    if (!userData.password) return setErrors({...errors, password: 'Debe rellenar este campo'});
    else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))){
        return setErrors({...errors, password: 'Ingrese un password valido'}); }
    else setErrors({email: '', password: ''});
};