import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Animated from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { checkIsRegisteredOwner } from '../../constants/parkingData'

const About = () => {
  const router = useRouter()
  const [isCheckingOwner, setIsCheckingOwner] = useState(false)

  const handleOwnerDashboard = async () => {
    if (!auth.currentUser) {
      Alert.alert(
        "Authentication Required",
        "Please sign in to access the owner dashboard."
      )
      return
    }
    
    try {
      setIsCheckingOwner(true)
      const isOwner = await checkIsRegisteredOwner()
      setIsCheckingOwner(false)
      
      if (isOwner) {
        router.push('/(owner)')
      } else {
        router.push('/(owner)/register')
      }
    } catch (error) {
      console.error("Error checking owner status:", error)
      Alert.alert("Error", "Could not verify owner status. Please try again.")
      setIsCheckingOwner(false)
    }
  }

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: async () => {
            try {
              // Sign out from Firebase
              await signOut(auth)
              
              // Clear the session from AsyncStorage
              await AsyncStorage.removeItem('userSession')
              
              // Navigate to login screen
              router.replace("/Login")
            } catch (error) {
              console.error("Logout error:", error)
              Alert.alert("Error", "Failed to logout. Please try again.")
            }
          }
        }
      ]
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-6">
        <View className="items-center mb-8 mt-4">
          <Text className="text-3xl font-bold text-gray-800">Account</Text>
        </View>

        <View className="bg-gray-50 rounded-xl p-6 mb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-2">App Information</Text>
          <Text className="text-gray-600 mb-1">Version: 1.0.0</Text>
          <Text className="text-gray-600">ParkEase - Find parking spots easily</Text>
        </View>

        <View className="bg-gray-50 rounded-xl p-6 mb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Account Options</Text>
          
          <TouchableOpacity 
            className="flex-row items-center mb-4 bg-blue-50 p-3 rounded-lg"
            onPress={() => router.push('/(tabs)/Bookings')}
          >
            <Ionicons name="calendar" size={24} color="#007AFF" />
            <Text className="text-blue-600 ml-3 text-base font-medium">My Bookings</Text>
            <Ionicons name="chevron-forward" size={20} color="#007AFF" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex-row items-center mb-4 bg-purple-50 p-3 rounded-lg"
            onPress={handleOwnerDashboard}
            disabled={isCheckingOwner}
          >
            <Ionicons name="business" size={24} color="#5856D6" />
            <Text className="text-purple-600 ml-3 text-base font-medium">
              {isCheckingOwner ? "Checking status..." : "Owner Dashboard"}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#5856D6" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center bg-red-50 p-3 rounded-lg"
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
            <Text className="text-red-600 ml-3 text-base font-medium">Logout</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-gray-50 rounded-xl p-6">
          <Text className="text-lg font-semibold text-gray-800 mb-2">Contact Support</Text>
          <Text className="text-gray-600 mb-1">Email: support@parkease.com</Text>
          <Text className="text-gray-600">Phone: +1 (555) 123-4567</Text>
        </View>

        <View className="flex-1 justify-end">
          <Text className="text-center text-gray-400 text-sm">
            © 2023 ParkEase. All rights reserved.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({})