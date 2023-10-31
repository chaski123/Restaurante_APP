import React, { useState } from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
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
import { Person, Phone, CheckCircle, RemoveCircle } from "@mui/icons-material";
import users from "../data/UserData";

const CardUser = () => {
  // Usamos un array de estados para controlar la visibilidad de los chips en cada tarjeta
  const [chipsVisible, setChipsVisible] = useState(users.map(() => true));

  // Funcion para activar al usuario
  const handleActivate = (index) => {
    const newChipsVisible = [...chipsVisible];
    newChipsVisible[index] = true;
    setChipsVisible(newChipsVisible);
  };

  // Funcion para desactivar al usuario
  const handleDeactivate = (index) => {
    const newChipsVisible = [...chipsVisible];
    newChipsVisible[index] = false;
    setChipsVisible(newChipsVisible);
  };

  return (
    <>
      {Object.values(users).map((user, index) => {
        const { id, name, mail, phone, img } = user;
        return (
          <Card key={id} sx={{ maxWidth: 360, bgcolor: "secondary", margin: 2 }}>
            <CardMedia component="img" height="350" image={img} alt="User 1" />
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
                  <ListItemText primary={mail} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Phone className="List-icon" />
                  </ListItemIcon>
                  <ListItemText primary={phone} />
                </ListItemButton>
              </List>
            </Typography>
            {chipsVisible[index] ? (
              <Chip
                className="bg-chip"
                label="Activar Usuario"
                onClick={() => handleDeactivate(index)}
                icon={<CheckCircle className="icono-personalizado-success" />}
                variant="outlined"
              />
            ) : (
              <Chip
                className="bg-chip"
                label="Desactivar Usuario"
                onClick={() => handleActivate(index)}
                icon={<RemoveCircle className="icono-personalizado-delete" />}
              />
            )}
          </Card>
        );
      })}
    </>
  );
};

export default CardUser;