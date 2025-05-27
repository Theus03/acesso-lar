import { toast } from "sonner";
import { motion } from "framer-motion";

type AlertType = "success" | "error" | "info" | "warning";

export function Alert(message: string, type: AlertType = "info") {

    const typeStyles: Record<AlertType, string> = {
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
        info: "bg-blue-600 text-white",
        warning: "bg-yellow-500 text-black"
    }

    toast.custom((t) => (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`${typeStyles[type]} p-4 rounded-lg shadow-lg w-lg flex justify-between items-center`}>
            {message}
            <button onClick={() => toast.dismiss(t)} className="ml-4 underline cursor-pointer">Fechar</button>
        </motion.div>
    ));        
}