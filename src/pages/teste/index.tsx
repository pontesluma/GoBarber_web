import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface TesteFormData {
  cityOrigin: string;
  cityDestiny: string;
  timeMinutes: string;
  plan: string;
}

const Teste: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: TesteFormData): Promise<void> {
    try {
      const schema = Yup.object().shape({
        cityOrigin: Yup.string().required('campo obrigatório!'),
        cityDestiny: Yup.string().required('campo obrigatório!'),
        timeMinutes: Yup.string().required('campo obrigatório!'),
        plan: Yup.string().required('campo obrigatório!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        console.log('Erro de validação');
      }

      formRef.current?.setErrors(validationErrors);
      console.log(err);
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input icon={FiArrowLeft} name="aa" placeholder="cityOrigin" />
        <Input
          icon={FiArrowLeft}
          name="cityDestiny"
          placeholder="cityDestiny"
        />
        <Input
          icon={FiArrowLeft}
          name="timeMinutes"
          placeholder="timeMinutes"
        />
        <Input icon={FiArrowLeft} name="plan" placeholder="plan" />
        <Button type="submit">Confirmar mudanças</Button>
      </Form>
    </Container>
  );
};

export default Teste;
