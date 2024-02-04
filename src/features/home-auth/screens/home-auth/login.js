import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Background from '@src/components/background';
import Logo from '@src/components/logo';
import {Theme} from '@src/common/theme';
import TextInputCus from '@src/components/text-input-custom';
import Button from '@src/components/button';
import {Router} from '@src/navigation/router';
import {useNavigation} from '@react-navigation/native';
import {
  emailValidator,
  infoValidator,
  passwordValidator,
} from '../../modules/auth.validation';
import {useDispatch, useSelector} from 'react-redux';
import {typeAuths} from '../../redux/auth.type';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let ref_input2 = useRef();
  let ref_input1 = useRef();

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const {errorLogin, isLogin, isAuthLoading} = useSelector(state => state.auth);

  // useEffect(() => {
  //   effect
  //   return () => {
  //   }
  // }, []);

  // nếu mà nó như ohia1 trên với [] rỗng thì nó sẽ chạy vô cái thằng useEffect này 1 lần duy nhất khi mà component được render
  // còn nếu mà có gía trị gì đó trong [] thì nó sẽ chạy mỗi khi mà giá trị trong [] thay đổi
  
  useEffect(() => {
    if (isLogin) {
      navigation.navigate(Router.BottomTabBar);
    }
  }, [isLogin]);

  const _onLoginPressed = () => {
    const emailError = infoValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    // //! dispatch to check loginACT
    dispatch({
      type: typeAuths.login,
      payload: {username: email.value, password: password.value},
    });
    //! dispatch to login via Firebase
    // dispatch(
    //   loginViaFirebaseACT({ email: email.value, password: password.value })
    // );
  };

  const _onGoogleLoginPressed = () => {
    showToast({
      title: 'Sign in',
      type: 'info',
      message: 'Sorry can not do it',
    });
  };

  return (
    <Background>
      <View style={styles.root}>
        <Logo />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: Theme.fontFamily.QuicksandSemiBold,
            fontSize: Theme.size.large,
            paddingBottom: 20,
          }}>
          Welcome back
        </Text>

        {!!errorLogin && <Text style={styles.error}>{errorLogin}</Text>}

        <TextInputCus
          label="Email or Username"
          returnKeyType="next"
          inputRef={ref => (ref_input1.current = ref)} // rất quan trọng, để định danh cho từng cái input
          autoFocus={false}
          blurOnSubmit={false}
          onSubmitEditing={() => ref_input2.current.focus()} // khi mà bấm next thì focus vào input tiếp theo
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInputCus
          label="Password"
          returnKeyType="done"
          inputRef={ref => (ref_input2.current = ref)}
          onSubmitEditing={_onLoginPressed}
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          errorText={password.error}
          isPwd
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.ForgotPassword)}>
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={{backgroundColor: Theme.colors.primary}}
          onPress={_onLoginPressed}
          disabled={isAuthLoading}>
          {isAuthLoading ? (
            <ActivityIndicator
              style={{opacity: 1}}
              animating={true}
              size="small"
              color="#fff"
            />
          ) : (
            <Text style={styles.text}>Login</Text>
          )}
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.Register)}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={{backgroundColor: Theme.colors.lightGreyColor}}
          onPress={_onGoogleLoginPressed}>
          <Text style={styles.text}>Google Sign-In</Text>
        </Button>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%', // quan trọng vi phải dung width 100% để nó không bị thu lại, no moi hien ra
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 4,
  },
  label: {
    fontFamily: Theme.fontFamily.GilroyLight,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    fontFamily: Theme.fontFamily.GilroySemiBold,
    color: Theme.colors.primary,
  },
  text: {
    fontFamily: Theme.fontFamily.GilroySemiBold,
    color: Theme.colors.secondary,
  },
  error: {
    width: '70%',
    color: Theme.colors.error,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.small,
    textAlign: 'center',
  },
});
