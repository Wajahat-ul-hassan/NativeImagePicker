import React , {useState , useEffect} from "react";
import {View , Text , Button , ImageBackground,Image  , StyleSheet} from "react-native"
// import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




class App extends React.Component{
  // state={
  //   Bhabi:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHpoTSLNay1j6KuwVTGvXvrE870JhHe6gtg&usqp=CAU"
  // }

  takephoto = async () => {
   let options = {
     mediaType:"photo"
   }

  try {
    await launchCamera(options , this.callback);
    console.log('Bhabhi ki photo agai')
  }catch(error){
    console.log("open camera",error)
  }
 
 }

callback = (resCamera) => {
//  console.log("--", resCamera)
  this.setState({Bhabi: resCamera.assets[0].uri});
}

takephotogallare = async () => {
  let options = {
    mediaType:"photo"
  }

 try {
   await launchImageLibrary(options , this.callback1);
   console.log('Bhabhi ki photo agai')
 }catch(error){
   console.log("open camera",error)
 }

}

callback1 = (resCamera) => {
//  console.log("--", resCamera)
 this.setState({Bhabi2: resCamera.assets[0].uri});
}

render(){
  return(
    <View>
      <Text>helllo world</Text>
      {this.state?.Bhabi && <Image
        style={{width:'100%', height:200}}
        source={{uri:this.state.Bhabi}}
      />}
        {this.state?.Bhabi2 && <Image
        style={{width:'100%', height:200}}
        source={{uri:this.state.Bhabi2}}
      />}
       <Button onPress={this.takephoto} title={"takephoto"}/> 
       <Button onPress={this.takephotogallare} title={"takephotogallare"}/> 
   
    </View>
  )
} 
}

const styles = StyleSheet.create({
  image:{
    height:100,
    width:100,
  }
});

export default App;