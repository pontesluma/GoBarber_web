import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  // const history = useHistory();

  const handleForm = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        // handles errors
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido.'),
        });

        await schema.validate(data, { abortEarly: false });

        // recuperação de senha
        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação de senha enviado!',
          description:
            'Enviamos um e-mail para confirmar sua recuperação de senha, cheque sua caixa de entrada.',
        });

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        // disparar toast message
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha!',
          description: 'Ocorreu um erro ao recuperar a senha, tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleForm}>
            <h1>Recuperar senha</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default ForgotPassword;
