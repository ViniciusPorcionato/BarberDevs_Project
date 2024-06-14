import { Camera, CameraType } from "expo-camera/legacy";
import {
  ContainerCamera,
  ContainerModalImage,
  ContentCamera,
} from "../../components/Container/Container";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

export const TelaCamera = ({ navigation, navigate }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);

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
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync(); // Corrigido para usar takePictureAsync
      setPhoto(photo.uri); // Descomentado para salvar a URI da foto
    }
    setOpenModal(true);
  }

  function ClearPhoto() {
    setPhoto(null);
    setOpenModal(false);
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function UploadPhoto() {

    navigation.navigate("TelaPerfil", { photoUri: photo })

    // await MediaLibrary.createAssetAsync(photo).then(() => {
    //   alert('Foto salva com sucesso')
    // }).catch(error => {
    //   alert('Não foi possivel salvar a foto')
    // })
  }

  return (
    <>
      {/* <ContainerCamera> */}
      <Camera style={{ height: "100%", width: "100%" }} type={type} ref={cameraRef}>
        <ButtonCloseCamera onPress={() => navigation.navigate(TelaPerfil)}>
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

          <ButtonPicture onPress={() => CapturePhoto()}>
            <FontAwesome name="camera" size={40} color="#FFB600" />
          </ButtonPicture>

          <ButtonToggle onPress={toggleCameraType}>
            <Ionicons name="camera-reverse-sharp" size={40} color="#FFB600" />
          </ButtonToggle>
        </ContentCamera>
      </Camera>

      <ContainerModalImage>
        <Modal animationType="slide" transparent={false} visible={openModal}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Image
              style={{ width: "100%", height: 500, borderRadius: 15 }}
              source={{ uri: photo }}
            />
            <View style={{ margin: 10, flexDirection: "row", gap: 20 }}>
              {/* Botoes de controle */}
              <TouchableOpacity
                style={styles.btnClear}
                onPress={() => ClearPhoto()}
              >
                <AntDesign name="closecircle" size={50} color="#ff0000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnUpload}
                onPress={() => UploadPhoto()}
              >
                <FontAwesome name="upload" size={50} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ContainerModalImage>

      {/* </ContainerCamera> */}
    </>
  );
};

const styles = StyleSheet.create({
  btnClear: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  btnUpload: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
