import { useState, useEffect } from "react";
import { X, QrCode } from "lucide-react";
import PMPMLLogo from "./PMPMLLogo";

const BusPassTicket = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [isExpired, setIsExpired] = useState(false);

  // Get today's date for booking time and validity
  const now = new Date();
  const bookingTime = new Date();
  bookingTime.setHours(6, 41, 0, 0);
  
  const validityEnd = new Date();
  validityEnd.setHours(23, 59, 0, 0);

  // Format date as "23 Dec, 25"
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month}, ${year}`;
  };

  // Format time as "06:41 AM"
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  };

  // Generate ticket ID based on date
  const generateTicketId = () => {
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hour = bookingTime.getHours().toString().padStart(2, "0");
    const min = bookingTime.getMinutes().toString().padStart(2, "0");
    const randomChars = "GKGDWU";
    return `${year}${month}${day}${hour}${min}${randomChars}`;
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 0, 0);

      const diff = endOfDay.getTime() - now.getTime();

      if (diff <= 0) {
        setIsExpired(true);
        setTimeRemaining("Expired");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 px-4 py-4">
        {/* Top Header - Now inside pink bg */}
        <header className="flex items-center justify-between px-2 py-3 max-w-md mx-auto">
          <button className="p-1">
            <X className="w-6 h-6 text-foreground" />
          </button>
          <div className="flex items-center gap-6">
            <span className="text-foreground font-medium">Need Help?</span>
            <span className="text-foreground font-medium underline">All passes</span>
          </div>
        </header>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-md mx-auto relative">
          {/* Red Header */}
          <div className="pass-header py-3 px-4 text-center">
            <h1 className="text-lg font-bold text-primary-foreground">
              पुणे महानगर परिवहन महामंडळ लि.
            </h1>
          </div>

          {/* Pass Details */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-muted-foreground text-xs mb-1">Pass Type</p>
                <p className="text-foreground font-bold text-lg">PMC & PCMC</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-1">ID</p>
                <p className="text-foreground font-bold text-2xl">9981</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-1">Fare</p>
                <p className="text-foreground font-bold text-2xl">₹70.8</p>
                <p className="text-foreground font-bold text-2xl -mt-1">3</p>
              </div>
            </div>

            {/* Dashed Separator with half circles */}
            <div className="relative my-4">
              {/* Left half circle cutout */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-r-full"></div>
              {/* Right half circle cutout */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-l-full"></div>
              {/* Dashed line */}
              <div className="border-t-2 border-dashed border-border mx-2"></div>
            </div>

            {/* Time Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-muted-foreground text-xs mb-1">Booking Time</p>
                <p className="text-foreground font-medium text-sm">
                  {formatDate(now)} | {formatTime(bookingTime)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-1">Validity Time</p>
                <p className="text-foreground font-medium text-sm">
                  {formatDate(now)} | {formatTime(validityEnd)}
                </p>
              </div>
            </div>

            {/* Ticket ID */}
            <p className="text-center text-foreground font-medium text-sm mb-4">
              {generateTicketId()}
            </p>

            {/* One Day Pass Badge */}
            <div className="pass-badge py-2 text-center mb-6">
              <span className="text-primary-foreground font-bold text-lg">
                One Day Pass
              </span>
            </div>

            {/* PMPML Logo with animation */}
            <div className="flex justify-center mb-6">
              <PMPMLLogo />
            </div>

            {/* Timer/Expired Status with gray background */}
            <div className="bg-muted/50 rounded-lg py-3 px-4">
              <p className="text-center text-muted-foreground text-base">
                {isExpired ? "Expired" : `Expires in ${timeRemaining}`}
              </p>
            </div>
          </div>
        </div>

        {/* Show QR Code Button */}
        <div className="max-w-md mx-auto mt-4">
          <button className="w-full bg-[hsl(150,45%,85%)] hover:bg-[hsl(150,45%,80%)] py-4 rounded-lg flex items-center justify-center gap-3 border border-[hsl(150,50%,70%)]">
            <QrCode className="w-6 h-6 text-[hsl(160,70%,35%)]" strokeWidth={2.5} />
            <span className="font-semibold text-lg text-[hsl(160,70%,30%)]">Show QR code</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default BusPassTicket;
