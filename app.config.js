module.exports = {
  name: "ParkEase",
  slug: "ParkEase",
  version: "1.0.0",
  scheme: "parkease",
  orientation: "default",
  icon: "./assets/adaptive-icon.png",
  userInterfaceStyle: "dark",
  splash: {
    image: "./assets/adaptive-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.parastud.ParkEase",
    config: {
      googleMapsApiKey: "AIzaSyBZWIMFJUMPjAaI1UwHcrbAgBFW4_WiaiY"
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.parastud.ParkEase",
    config: {
      googleMaps: {
        apiKey: "AIzaSyBZWIMFJUMPjAaI1UwHcrbAgBFW4_WiaiY"
      }
    },
    permissions: [
      "ACCESS_COARSE_LOCATION",
      "ACCESS_FINE_LOCATION"
    ]
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro"
  },
  plugins: [
    "expo-router",
    [
      "expo-location",
      {
        "locationAlwaysAndWhenInUsePermission": "Allow ParkEase to use your location to find nearby parking spots."
      }
    ],
    "sentry-expo"
  ],
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: "4116df7f-cd50-44c4-822c-54da485efdd5"
    }
  }
}; 