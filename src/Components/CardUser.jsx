import React, { useEffect, useState } from "react";
import { getUsersFetch } from "../api/getUsersFetch";
import { updateUserStatus } from "../api/updateUserStatus";
import Swal from "sweetalert2";
import DraftsIcon from "@mui/icons-material/Drafts";
import Logo from "../img/User_Logo1.png";
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  CardMedia,
  Card,
  Chip,
} from "@mui/material";
import {
  Person,
  CheckCircle,
  RemoveCircle,
  CircleRounded,
} from "@mui/icons-material";

const CardUser = () => {
  // Usamos un array de estados para controlar la visibilidad de los chips en cada tarjeta
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFetch()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleToggleActivation = async (userId, newStatus) => {
    console.log(userId, newStatus);
    try {
      await updateUserStatus(userId, newStatus);

      // Actualizar el estado local si es necesario
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers];
        const updatedUserIndex = updatedUsers.findIndex(
          (user) => user._id === userId
        );
        if (updatedUserIndex !== -1) {
          updatedUsers[updatedUserIndex].active = newStatus;
        }
        Swal.fire({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "El estado del usuario se actualizo exitosamente.",
        });
        return updatedUsers;
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error}`,
        text: "No se pudo actualizar el estado del usuario.",
      });
    }
  };

  return (
    <>
      {users.map((user) => {
        const { _id, name, email, role, active } = user;
        return (
          <Card
            key={_id}
            sx={{ maxWidth: 360, bgcolor: "secondary", margin: 2 }}
          >
            <CardMedia component="img" height="350" src={Logo} alt="User_Img" />
            <Typography variant="body2" color="text.primary">
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "primary" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <Person className="List-icon" />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon className="List-icon" />
                  </ListItemIcon>
                  <ListItemText primary={email} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleRounded className="List-icon" />
                  </ListItemIcon>
                  <ListItemText primary={role} />
                </ListItemButton>
              </List>
            </Typography>
            <Chip
              className="bg-chip"
              label={active ? "Desactivar Usuario" : "Activar Usuario"}
              onClick={() => handleToggleActivation(user._id, !active)}
              icon={
                user.active ? (
                  <RemoveCircle className="icono-personalizado-delete" />
                ) : (
                  <CheckCircle className="icono-personalizado-success" />
                )
              }
              variant={user.active ? undefined : "outlined"}
            />
          </Card>
        );
      })}
    </>
  );
};

export default CardUser;
