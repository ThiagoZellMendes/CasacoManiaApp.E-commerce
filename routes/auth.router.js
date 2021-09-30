import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Home from '../src/pages/Home';
import Detail from '../src/pages/Detail/1';
import Detail2 from '../src/pages/Detail/2';
import Detail3 from '../src/pages/Detail/3';
import Detail4 from '../src/pages/Detail/4';
import Detail5 from '../src/pages/Detail/5';
import Detail6 from '../src/pages/Detail/6';
import Notifications from '../src/pages/Testetab/Notifications';
import LoginScreen from '../src/pages/LoginScreen'
import RegisterPage from '../src/pages/RegisterPage/usuario';
import Perfil from '../src/pages/Perfil';
import EditPage from '../src/pages/EditPage';
import CartProduct from '../src/pages/Cart';
import Checkout from '../src/pages/Cart/checkout';
import { GlobalContext } from './../src/context'
import { useIsFocused } from '@react-navigation/native';
import GlobalProvider from './../src/context';

import { Entypo, Feather} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//Tab Bar
function TabRoutes() {
  const isFocused = useIsFocused()
  isFocused ? 'focused' : 'unfocused'
  
  const { cart } = useContext(GlobalContext)    

  return(
      
         <Tab.Navigator 
         /* "initialRouteName" Inicia o app da Tabbar selecionada*/
         initialRouteName = "Principal"
         tabBarOptions={{
        
             style:{
                backgroundColor: '#4B0082',
                bonderTopColor: 'transparent'
             },
             activeTintColor: 'white',
             tabStyle:{
                 paddingBottom: 5,
                 paddingTop: 5
             }
            
            }}
            >
             
             <Tab.Screen 
             name="Perfil" 
             component= {Perfil} 
             options={{
                 tabBarIcon: ({ size, color }) => (
                     <Feather name="user" size={size} color={color} />
                 )
             }}
             />
             
             <Tab.Screen 
              name="carrinho" 
              component= {CartProduct} 
              options={
                {
                tabBarIcon: ({ size, color }) => (
                    <Feather name="shopping-cart" size={size} color={color} />
                ),
                tabBarBadge:cart.length,
                tabBarBadgeStyle: {
                  backgroundColor: '#28cc9e', color: '#FFF', fontSize: 15, fontWeight: 'bold'
                }
            }}
              />
            
             <Tab.Screen 
             name="Principal" 
             component= {Home} 
             options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
             />
            
             <Tab.Screen 
             name="Notificações" 
             component= {Notifications} 
             options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="notification" size={size} color={color} />
                )
            }}
             />
            
             {/* <Tab.Screen
              name="Implementação" 
              component= {Implement} 
              options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="settings" size={size} color={color} />
                )
            }}
              /> */}
         
         </Tab.Navigator>

    ) 
 }
 
//Navigação Principal
function Routes(){
    return(
      <GlobalProvider>
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen
                //Inclusão do TabNavigation
                    
                    name={"Main"} 
                    component={Home}
                    options={
                        {headerShown: false}
                    } 
                />
                <Stack.Screen
                //Inclusão do TabNavigation
                    
                    name={"Principal"} 
                    component={TabRoutes}
                    options={
                        {headerShown: false}
                    } 
                />

                <Stack.Screen
                //Navegaçao para pagina de registro.
                    name="Register"
                    component={RegisterPage}
                    options={
                        {headerTintColor:'#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao para o perfil de Usuario.
                    name="Checkout"
                    component={Checkout}
                    options={{
                        headerTintColor:'#4B0082',
                        headerTitle:'Finalizar comprar'
                        
                    }}
                />

                <Stack.Screen
                //Navegaçao para o perfil de Usuario.
                    name="EditPage"
                    component={EditPage}
                    options={
                        {headerTintColor:'#4B0082'}
                    }
                />
                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name='Detail1'
                    component={Detail}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }

                />
                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail2"
                    component={Detail2}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }    
                />

               <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail3"
                    component={Detail3}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail4"
                    component={Detail4}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail5"
                    component={Detail5}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail6"
                    component={Detail6}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
      </GlobalProvider>
    )
  
}

export default Routes;
