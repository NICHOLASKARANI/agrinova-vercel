🌱 AgriNova - SmartSeason Field Monitoring System

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success)](https://agrinova-rouge.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-blue)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://mongodb.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://typescriptlang.org)

 🚀 Live Demo

Production URL: [https://agrinova-rouge.vercel.app](https://agrinova-rouge.vercel.app)

 📖 Overview

AgriNova is an AI-powered SmartSeason Field Monitoring System that revolutionizes agricultural management through intelligent crop tracking, predictive analytics, and real-time field monitoring. Built for African farmers and agricultural enterprises, it combines cutting-edge technology with practical farming needs.

 ✨ Key Features

 🤖 AI-Powered Intelligence
- Health Score Calculation: Real-time field health monitoring (0-100%)
- Yield Prediction: AI forecasts harvest yields based on multiple factors
- Risk Detection: Automatic identification of potential issues
- Smart Recommendations: Actionable insights for crop management

 📊 Advanced Monitoring
- Multi-stage Tracking: Planted → Growing → Flowering → Maturing → Ready → Harvested
- Soil Health Monitoring: pH, moisture, nutrient levels (N,P,K)
- Weather Integration: Real-time forecasts and alerts
- Location Tracking: GPS coordinates and regional analytics

 👥 Role-Based Access
- Admin Dashboard: Full system control, field creation, agent assignment
- Field Agent Dashboard: Assigned fields management, stage updates, notes

 🔐 Security Features
- JWT Authentication: Secure token-based auth
- Password Hashing: bcrypt encryption
- Rate Limiting: Brute force protection
- HTTP-Only Cookies: Secure session management

 🎯 System Architecture
AgriNova Platform
├── Frontend (Next.js 14)
├── Backend API (Next.js API Routes)
├── Database (MongoDB Atlas)
├── Authentication (JWT + Cookies)
├── AI Services (Prediction Engine)
└── Real-time Monitoring


 📱 Features Matrix

| Feature             | Admin | Field Agent | Public |
|---------            |-------|-------------|--------|
| Field Management    | ✅ | ❌ | ❌ |
| View All Fields     | ✅ | ❌ | ❌ |
| View Assigned Fields| ❌ | ✅ | ❌ |
| Update Field Stages | ✅ | ✅ | ❌ |
| Add Observations    | ✅ | ✅ | ❌ |
| Create New Fields   | ✅ | ❌ | ❌ |
| Delete Fields       | ✅ | ❌ | ❌ |
| View Analytics      | ✅ | ✅ | ❌ |
| Register Account    | ❌ | ❌ | ✅ |
| Login               | ❌ | ❌ | ✅ |

🗄️ Data Models

Field Model
```typescript
{
  name: string
  cropType: string
  plantingDate: Date
  currentStage: 'PLANTED'|'GROWING'|'FLOWERING'|'MATURING'|'READY'|'HARVESTED'
  location: { lat, lng, region, altitude }
  size: number
  soilData: { pH, moisture, nutrients }
  healthScore: number
  predictions: { yieldEstimate, harvestDate, riskLevel }
  alerts: Array<{ type, message, severity }>
}
