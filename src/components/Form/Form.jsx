import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/slices/userSlice';
import { AuthActions } from '../../store/slices/auth-slice';
import useInput from '../../hooks/use-input';
import FormActions from './FormActions/FormActions';
import Card from '../ui/Card';
import FormControl from './FormControl/FormControl';

import styled from 'styled-components';

const Form = () => {
  const history = useHistory();
  const navigateToHomePage = () => { history.push('/home') }; // Temporary Navigation
  const dispatch = useDispatch();

  const {
    enteredValue: enteredUserName,
    hasError: userNameHasError,
    isTouched: userNameInputTouched,
    setIsTouched: setUserNameTouched,
    inputChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurChandler,
    inputReset: userNameReset
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredPassword,
    hasError: passwordHasError,
    isTouched: passswordInputTouched,
    setIsTouched: setPasswordTouched,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurChandler,
    inputReset: passwordReset
  } = useInput((value) => value.trim().length > 5);
  
  const formIsValid = (!userNameHasError && userNameInputTouched) && (!passwordHasError && passswordInputTouched);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setUserNameTouched(true);
    setPasswordTouched(true);

    const enteredUserData = {
      userName: enteredUserName,
      password: enteredPassword
    };

    if (formIsValid) {
      dispatch(AuthActions.login());
      dispatch(setUserData(enteredUserData));
      localStorage.setItem('isAuth', 1);
      userNameReset();
      passwordReset();
      navigateToHomePage();
    } else {
      console.log('Error')
      return;
    }
  };

  return (
    <Card>
      <StyledForm onSubmit={formSubmitHandler}>
        <StyledTitle>Login</StyledTitle>
        <FormControl
          inputId='name'
          inputType='text'
          inputValue={enteredUserName}
          inputChangeHandler={userNameChangeHandler}
          inputBlurHandler={userNameBlurChandler}
          inputHasError={userNameHasError}
        />
        <FormControl
          inputId='password'
          inputType='password'
          inputValue={enteredPassword}
          inputChangeHandler={passwordChangeHandler}
          inputBlurHandler={passwordBlurChandler}
          inputHasError={passwordHasError}
        />
        <FormActions />
      </StyledForm>
    </Card>
  );
};

export default Form;

const StyledForm = styled.form`
  padding: 1.75rem 2rem;
  width: 18rem;

  & > * + * {
    margin-top: 1.25rem;
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
`;