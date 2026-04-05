# ParkEase – Smart Parking Finder

> ⚠️ This project is currently a work in progress / demo. Some features may be incomplete.

ParkEase is a location-based smart parking app built with React Native Expo. It helps users discover nearby parking spots, check real-time availability, and navigate directly to their chosen slot using Google Maps.

---

## ✨ Features

- 📍 Location-based search with 100+ parking listings
- 🗺️ Real-time navigation powered by Google Maps API
- ⚡ 20% faster app load time via lazy loading and optimized rendering
- 🔄 Live parking availability sync across users in real time
- 🔥 Firebase integration for backend data and authentication

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile | React Native (Expo) |
| Navigation | React Navigation |
| Maps | Google Maps API |
| Backend | Firebase |
| Database | Firebase |

---

## 📸 Screenshots

| | | |
|---|---|---|
| ![ParkEase Screen 1](https://media.licdn.com/dms/image/v2/D562DAQEVPjlI4MaUtg/profile-treasury-image-shrink_800_800/B56ZbTmbmgGoAY-/0/1747306790284?e=1775984400&v=beta&t=Cd-EPJYpetPbcO1qla41cX_JPsnh5b18AX9EIRqpbpg) | ![ParkEase Screen 2](https://media.licdn.com/dms/image/v2/D562DAQHwpi0gWN3Pyw/profile-treasury-image-shrink_800_800/B56ZbTmXvaHgAY-/0/1747306775210?e=1775984400&v=beta&t=JjqgdfZoV5DxJh19tJa-oIlpLeL7dR2PRubQExh-_2U) | ![ParkEase Screen 3](https://media.licdn.com/dms/image/v2/D562DAQGIq7aQDv3pKA/profile-treasury-image-shrink_800_800/B56ZbTmNSQHUAk-/0/1747306732586?e=1775984400&v=beta&t=cpEP0r2iJL5oj0g5QExDGk8lPQsnOY28rS-ge1zLF1I) |
| ![ParkEase Screen 4](https://media.licdn.com/dms/image/v2/D562DAQE3yDFi0my7RA/profile-treasury-image-shrink_800_800/B56ZbTmeHfGsAc-/0/1747306800882?e=1775984400&v=beta&t=E_HUCuMwOwRATqs7VFdmS0zjIFlCfAHvB0Uc8f5n4_Y) | | |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI — `npm install -g expo-cli`
- A Google Maps API key ([get one here](https://console.cloud.google.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/Parastud/ParkEase.git
cd ParkEase

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
EXPO_PROJECT_ID=your_expo_project_id
```

### Running the Backend

```bash
cd server
npm install
node index.js
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [Parth Sharma](https://github.com/parastud)
