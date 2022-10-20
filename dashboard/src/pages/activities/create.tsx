import Head from "next/head";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Header } from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { Sidebar } from "../../components/Sidebar";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { useForm } from "react-hook-form";
import { Select } from "../../components/Form/Select";
import { Button } from "../../components/Form/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Phase {
  id: string;
  title: string;
  order: number;
}


interface CreateActivityFormData {
  title: string;
  order: number;
  type: 'quiz' | 'block_activity';
  is_needed_code: boolean;
  phase_id: string;
  description: string;
  tips: string[];
}

const createActivityFormSchema = yup.object().shape({

});

export default function CreateActivities() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset, control } = useForm<CreateActivityFormData>({
    resolver: yupResolver(createActivityFormSchema)
  });

  async function loadData() {
    const response = await api.get("/phases");

    setPhases(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const activitiesTypes = [
    {
      id: '123',
      title: 'Quiz',
      value: 'quiz'
    },
    {
      id: '321',
      title: 'Block Activity',
      value: 'block_activity'
    }
  ];

  const isNeededCodeOptions = [
    {
      id: '123',
      title: 'Sim',
      value: 'true'
    },
    {
      id: '321',
      title: 'Não',
      value: 'false'
    }
  ];

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de atividades</title>
      </Head>
      <div className="h-screen bg-gray-950 overflow-auto">
        <Header />

        <div className="flex w-full">
          <ToastContainer 
            theme="colored" 
            toastClassName="errorAlert"
            autoClose={2000} 
            pauseOnHover={false} 
          />
          <Sidebar />

          <div className="mt-10 ml-10 flex flex-col">
            <h1 className="text-gray-150 text-4xl font-medium">Criação de atividades</h1>
            <form className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
              <div className="flex gap-5">
                  <InputWithLabel
                    label="Título"
                    {...register("title")}
                    error={formState.errors.title?.message}
                  />

                  <InputWithLabel
                    label="Ordem"
                    type="number"
                    inputSize="small"
                    {...register("order")}
                    error={formState.errors.order?.message}
                    min={0}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Tipo"
                    options={activitiesTypes}
                    {...register("type")}
                    error={formState.errors.type?.message}
                  />

                  <Select
                    label="É necessário código?"
                    options={isNeededCodeOptions}
                    {...register("is_needed_code")}
                    error={formState.errors.is_needed_code?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Fase"
                    options={phases.map(phase => {
                      return {
                        id: phase.id,
                        title: phase.title,
                        description: String(phase.order),
                        value: phase.id
                      }
                    })}
                    {...register("phase_id")}
                    error={formState.errors.phase_id?.message}
                  />

                  <InputWithLabel
                    label="Descrição"
                    {...register("description")}
                    error={formState.errors.description?.message}
                  />
                </div>
              </div>

              <div className="mb-10">
                <Button 
                  loading={isLoading} 
                  disabled={isLoading}
                  title="Criar atividade" 
                  type="submit"            
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}