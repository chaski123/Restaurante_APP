import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Chip,
} from "@mui/material";
import { Person, Phone, CheckCircle, RemoveCircle } from "@mui/icons-material";
import users from '../data/UserData'

const CardUser = () => {
    const handleClick = () => {
        console.info('Hiciste click en activar');
      };
    
      const handleDelete = () => {
        console.info('Hiciste click en desactivar');
      };

  return (
    <>
    {Object.values(users).map((user)=>{
        const { id,name, mail, phone, img } = user;
        return(
            <Card key={id} sx={{ maxWidth: 380, bgcolor: "secondary", margin: 10 }}>
            <CardMedia component="img" height="350" image={img} alt="User 1" />
            <CardContent>
              <Typography variant="body2" color="text.primary">
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "primary" }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Person  className="List-icon"/>
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon className="List-icon"/>
                    </ListItemIcon>
                    <ListItemText primary={mail} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <Phone className="List-icon"/>
                    </ListItemIcon>
                    <ListItemText primary={phone} />
                  </ListItemButton>
                </List>
              </Typography> 
              <Chip
                className="bg-chip"
                label="Desactivar Usuario"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<CheckCircle className="icono-personalizado-success"/>}
              />
              <Chip
                className="bg-chip"
                label="Activar Usuario"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<RemoveCircle className="icono-personalizado-delete" />}
                variant="outlined"
              />
            </CardContent>
          </Card>
        )
    })}
    </>
  );
};

export default CardUser;
