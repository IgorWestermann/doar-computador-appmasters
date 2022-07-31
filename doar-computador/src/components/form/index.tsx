import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";

enum DeviceType {
  notebook = "Notebook",
  desktop = "Desktop",
  netbook = "Netbook",
  monitor = "Screen",
  impressora = "Printer",
  scanner = "Scanner",
}

enum ConditionType {
  working = "Tem todas as partes, liga e funciona normalmente",
  notWorking = "Tem todas as partes, mas não liga mais",
  broken = "Faltam peças, funciona só as vezes ou está quebrado",
}

interface FormProps {
  name: String; //
  email: String;
  phone: String; //
  zip: String; //
  city: String; //
  state: String; //
  streetAddress: String; //
  number: String; //
  complement?: String;
  neighborhood: String; //
  deviceCount: number; //
  // devices: [{ type: DeviceType; condition: ConditionType }];
  devices: object;
}

const TypeAndCondition = zod.object({
  type: zod.string(),
  condition: zod.string(),
});

const newValidation = zod.object({
  name: zod.string().min(1, "Campo obrigatorio"),
  email: zod.string().min(1, "Campo obrigatorio"),
  phone: zod.string().min(1, "Campo obrigatorio"),
  zip: zod.string().min(1, "Campo obrigatorio"),
  city: zod.string().min(1, "Campo obrigatorio"),
  state: zod.string().min(1, "Campo obrigatorio"),
  streetAddress: zod.string().min(1, "Campo obrigatorio"),
  number: zod.string().min(1, "Campo obrigatorio"),
  complement: zod.string().min(1, "Campo obrigatorio"),
  neighborhood: zod.string().min(1, "Campo obrigatorio"),
  deviceCount: zod.number().min(1, "Campo obrigatorio"),
  devices: zod.array(TypeAndCondition).optional(),
});

export function Form() {
  const [cycles, setCycles] = useState<FormProps>({} as FormProps);
  const { register, handleSubmit, watch, reset, setValue, setFocus } =
    useForm<FormProps>({
      resolver: zodResolver(newValidation),
    });

  function handleCreateNewCycle(data: FormProps) {
    console.log(JSON.stringify(data));
    setCycles(data);
    axios
      .post("https://doar-computador-api.herokuapp.com/donation", cycles)
      .then((res) => {
        <Alert status="success">
          <AlertIcon />
          Formulário enviado com sucesso!
        </Alert>;
        reset();
        console.log(res.status);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          <Alert status="warning">
            <AlertIcon /> {err.response.data.errorMessage}
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your application has been received. We will review your
                application and respond within the next 48 hours.
              </AlertDescription>
            </Box>
          </Alert>;
        }
        console.log(err.response);
      });
  }

  function createElements(n) {
    var elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(
        <>
          <label htmlFor="devices"></label>
          <Select
            style={{ marginTop: "24px", marginBottom: "8px" }}
            {...register(`devices.${i}.type`)}
          >
            <option value="notebook">Notebook</option>
            <option value="desktop">Desktop</option>
            <option value="netbook">Netbook</option>
            <option value="screen">Monitor</option>
            <option value="printer">Impressora</option>
            <option value="scanner">Scanner</option>
          </Select>
          <Select
            style={{ marginBottom: "24px" }}
            {...register(`devices.${i}.condition`)}
          >
            <option value="working">
              Tem todas as partes, liga e funciona normalmente
            </option>
            <option value="notWorking">
              Tem todas as partes, mas não liga mais
            </option>
            <option value="broken">
              Faltam peças, funciona só as vezes ou está quebrado
            </option>
          </Select>
        </>
      );
    }
    return elements;
  }

  const formData = watch("deviceCount");
  console.log(formData);

  const checkCep = (e) => {
    if (!e.target.value) return;
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setValue("streetAddress", data.logradouro);
        setValue("complement", data.complemento);
        setValue("neighborhood", data.bairro);
        setFocus("number");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Center>
      <Container>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <SimpleGrid columns={[2, null, 3]} spacing="40px">
            <Box bg="white" height="60px">
              <label htmlFor="name">Nome</label>
              <Input
                bg="white"
                id="name"
                placeholder="Nome"
                {...register("name", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="email">Email</label>
              <Input id="email" placeholder="Email" {...register("email")} />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="phone">Telefone</label>
              <Input
                id="phone"
                placeholder="Telefone"
                {...register("phone", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="zip">CEP</label>
              <Input
                id="zip"
                placeholder="CEP"
                {...register("zip", { required: true })}
                onBlur={checkCep}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="city">Cidade</label>
              <Input
                id="city"
                placeholder="Cidade"
                {...register("city", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="state">Estado</label>
              <Input
                id="state"
                placeholder="Estado"
                {...register("state", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="streetAddress">Endereco</label>
              <Input
                id="streetAddress"
                placeholder="Endereco"
                {...register("streetAddress", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="number">Número</label>
              <Input
                id="number"
                placeholder="Numero"
                {...register("number", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="complement">Complemento</label>
              <Input
                id="complement"
                placeholder="Complemento"
                {...register("complement")}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="neighborhood">Bairro</label>
              <Input
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood", { required: true })}
              />
            </Box>
            <Box bg="white" height="60px">
              <label htmlFor="deviceCount">
                Quantos equipamentos serão doados
              </label>
              <Input
                id="deviceCount"
                placeholder="Quantidade"
                {...register("deviceCount", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </Box>

            <Center h="110px">
              <Box bg="white" height="60px">
                <Button type="submit" colorScheme="blue">
                  Enviar
                </Button>
              </Box>
            </Center>
          </SimpleGrid>
          <Divider />
          <SimpleGrid columns={2} spacing={8}>
            <Box height="60px">
              {formData ? <p>Quais dispositivos serão doados?</p> : <></>}

              {formData ? createElements(formData) : <></>}
            </Box>
          </SimpleGrid>
        </form>
      </Container>
    </Center>
  );
}
