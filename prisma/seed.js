const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('?? Seeding MongoDB database...')

  // Clean existing data
  try {
    await prisma.prediction.deleteMany()
    await prisma.update.deleteMany()
    await prisma.field.deleteMany()
    await prisma.user.deleteMany()
    console.log('? Cleared existing data')
  } catch (e) {
    console.log('No existing data to clear')
  }

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.create({
    data: {
      email: 'admin@agrinova.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  })
  console.log('? Admin user created')

  // Create field agent
  const agentPassword = await bcrypt.hash('agent123', 10)
  const agent = await prisma.user.create({
    data: {
      email: 'john@agrinova.com',
      name: 'John Field Agent',
      password: agentPassword,
      role: 'FIELD_AGENT',
    },
  })
  console.log('? Agent user created')

  // Create sample fields
  const fields = [
    {
      name: 'North Field',
      cropType: 'Corn',
      plantingDate: new Date('2024-03-15'),
      currentStage: 'GROWING',
      location: 'North Region',
      size: 45.5,
      agentId: agent.id,
    },
    {
      name: 'South Valley',
      cropType: 'Wheat',
      plantingDate: new Date('2024-02-20'),
      currentStage: 'READY',
      location: 'South Region',
      size: 32.0,
      agentId: agent.id,
    },
    {
      name: 'East Garden',
      cropType: 'Tomatoes',
      plantingDate: new Date('2024-04-01'),
      currentStage: 'PLANTED',
      location: 'East Region',
      size: 12.5,
      agentId: agent.id,
    },
    {
      name: 'West Field',
      cropType: 'Soybeans',
      plantingDate: new Date('2024-01-10'),
      currentStage: 'HARVESTED',
      location: 'West Region',
      size: 28.0,
      agentId: agent.id,
    },
  ]

  for (const fieldData of fields) {
    const field = await prisma.field.create({
      data: fieldData,
    })
    console.log(`? Field created: ${field.name}`)
    
    // Add an initial update
    await prisma.update.create({
      data: {
        fieldId: field.id,
        userId: agent.id,
        newStage: field.currentStage,
        notes: `Initial update for ${field.name}`,
        healthScore: Math.floor(Math.random() * 30) + 70,
      },
    })
  }

  console.log('\n?? Seeding complete!')
  console.log('\n?? Demo Credentials:')
  console.log('Admin: admin@agrinova.com / admin123')
  console.log('Agent: john@agrinova.com / agent123')
}

main()
  .catch((e) => {
    console.error('? Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
