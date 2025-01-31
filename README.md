# Travel Booking API

Nidaamkan waa API loogu talagalay in lagu maamulo dalabka safarada iyo meelaha la booqan karo. Waxaa la isticmaali karaa mobile apps ama website-yo si ay ula xidhiidhaan server-ka.

## Waxa uu Sameyn Karo

- **User Management**
  - Diiwaan gelinta users-ka cusub
  - Login system
  - JWT authentication

- **Destination Management**
  - Liiska meelaha la booqan karo
  - Faahfaahinta meel kasta
  - Qiimaha safarka
  - Tirada kuraasta la heli karo

- **Booking System**
  - Dalabka safarada
  - Tracking-ga xaalada dalabka
  - Liiska dalabyadii hore

## Sida Loo Isticmaalo

### 1. Installation

### 2. Configuration

1. Samee `.env` file adoo ka copy-gareenaya `.env.example`:

```bash
cp .env.example .env
```

2. Ku qor `.env` file-ka qiimayaasha saxda ah:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/travel_booking
JWT_SECRET=secret123
JWT_EXPIRES_IN=90d
NODE_ENV=development

// EMAIL CONFIG
EMAIL_SERVICE=gmail
EMAIL=your_test@gmail.com
PASSWORD=123456
```

### 3. Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Diiwaan gelin
- `POST /api/auth/login` - Login

### Destinations
- `GET /api/destinations` - Hel dhammaan meelaha
- `GET /api/destinations/:id` - Hel meel gaar ah
- `POST /api/destinations` - Ku dar meel cusub (Admin)
- `PATCH /api/destinations/:id` - Wax ka beddel meel (Admin)
- `DELETE /api/destinations/:id` - Tirtir meel (Admin)

### Bookings
- `POST /api/bookings` - Samee booking cusub
- `GET /api/bookings` - Arag bookings-kaaga
- `GET /api/bookings/all` - Arag dhammaan bookings-ka (Admin)
- `PATCH /api/bookings/:id/status` - Bedel xaalada booking (Admin)

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Other dependencies...

## Security Features

- Password hashing
- JWT authentication
- Role-based authorization
- Environment variables
- Input validation
- Error handling

## Database Structure

### User Model
```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  role: String (user/admin),
  createdAt: Date
}
```

### Destination Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: String,
  location: String,
  availableSeats: Number,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  user: ObjectId,
  destination: ObjectId,
  bookingDate: Date,
  numberOfPeople: Number,
  totalPrice: Number,
  status: String,
  createdAt: Date
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/Qadar110/travel_booking_api](https://github.com/yourusername/travel_booking_api)
