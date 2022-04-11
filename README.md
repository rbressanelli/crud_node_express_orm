**CRUD de usuário - ORM**


<b>POST</b>

Criar usuário:

/users

{</br>
  "name": "Ricardo",</br>
  "email": "ricardo@gmail.com",</br>
  "password": "123456",</br>
  "isAdm": true</br>
}
</br>
</br>

Login de usuário

/login


{</br>
	"email": "ricardo@gmail.com",</br>
	"password": "123456"</br>
}

</br>
<b>GET</b>

Listar usuários - somente administrador

/users

</br>

Buscar perfil de usuário

/users/profile


</br>

<b>PATCH</b>

Update de usuário
Administrador pode atualizar qualquer usuário, o outros somente podem atualizar o seu próprio usuário.
Pode-se atualizar qualquer item do perfil exceto o de administrador. 

{</br>
	"name": "André",</br>
}

/users/uuid

</br>
<b>DELETE</b>

Delete de usuário
Administrador pode deletar qualquer usuário, os outros somente podem deletar o próprio usuário.

/users/uuid