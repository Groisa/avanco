"use client";

import { useActionState, useEffect, useRef } from "react";
import { Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createUser, type CreateUserState } from "./actions";

const initialState: CreateUserState = { error: null };

export default function CreateUserForm() {
  const [state, formAction] = useActionState(createUser, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <Card className="mt-8 border-2 border-dashed border-forest-600/20">
      <p className="mb-4 font-display text-base font-medium text-forest-900">
        Adicionar usuário
      </p>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="E-mail">
            <Input name="email" type="email" required />
          </Field>
          <Field label="Senha (mín. 8 caracteres)">
            <Input name="password" type="password" required minLength={8} />
          </Field>
        </div>
        {state.error && (
          <p className="text-sm text-clay-600">{state.error}</p>
        )}
        {state.success && (
          <p className="text-sm text-forest-700">Usuário criado com sucesso.</p>
        )}
        <SaveButton>Adicionar</SaveButton>
      </form>
    </Card>
  );
}
