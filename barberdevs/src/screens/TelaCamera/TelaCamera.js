import { Camera, CameraType } from "expo-camera/legacy";
import {
  ContainerCamera,
  ContentCamera,
} from "../../components/Container/Container";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  ButtonCloseCamera,
  ButtonGalery,
  ButtonPicture,
  ButtonToggle,
} from "../../components/button/button";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TelaPerfil } from "../TelaPerfil/TelaPerfil";

export const TelaCamera = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [tipoCamera, setTipoCamera] = useState(CameraType.front)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>Solicitando permissão...</Text>
      </View>
    );
  }
  
  if (hasPermission === false) {
    return (
      <View>
        <Text>Não concedido acesso à câmera</Text>
      </View>
    );
  }

async function CapturePhoto() {
    if(cameraRef) {
        const photo = await Camera.requestCameraPermissionsAsync()

    }
    setPhoto(photo.uri)
    
}

function ClearPhoto() {
  setPhoto(null)
  setOpenModal(false)
}

  return (
    <>

      <ContainerCamera>
        <Camera style={{ flex: 1, aspectRatio: 16 / 9}} >

        <ButtonCloseCamera onPress={() => navigation.navigate(TelaPerfil) }>
        <AntDesign name="close" size={40} color="#FFB600" />
      </ButtonCloseCamera>
      
        <ContentCamera>

        <ButtonGalery>
            <MaterialCommunityIcons
              name="camera-burst"
              size={40}
              color="#FFB600"
            />
          </ButtonGalery>

          <ButtonPicture>
            <FontAwesome name="camera" size={40} color="#FFB600" />
          </ButtonPicture>

          <ButtonToggle>
            <Ionicons name="camera-reverse-sharp" size={40} color="#FFB600" />
          </ButtonToggle>

        </ContentCamera>

        </Camera>

      </ContainerCamera>

      

    </>
  );
}
