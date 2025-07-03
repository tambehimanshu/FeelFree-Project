// ExampleMotionCard.jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExampleMotionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="max-w-md mx-auto mt-10">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p>This card is animated with Framer Motion.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
