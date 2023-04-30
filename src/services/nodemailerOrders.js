import { createTransport } from "nodemailer";

async function sendOrderToAdminMail(order) {
    try {
        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: process.env.ADMIN_MAIL,
                pass: process.env.ADMIN_MAIL_PASS
            }
        });

        const mailBody = {
            from: 'E-Commerce',
            to: process.env.ADMIN_MAIL,
            subject: "Nuevo pedido de compra",
            html:
                `<h1>Orden N°${order.orderId}</h1>
            <div style='display: flex; flex-direction: column; gap: 5px;'>
            <span>Usuario:${order.clientEmail}</span>
            <span>Productos:</span>
            ${generateProductsList(order.products)}
            <span>Costo total: ${order.totalPrice}</span>
            </div>`
        }

        await transporter.sendMail(mailBody);
        console.log("Email enviado");
    } catch (error) {
        console.log("Error al enviar la orden por email");
        console.log(error);
    }

}

function generateProductsList(products) {
    let html = "";
    for (let product of products) {
        html += `<span>${product.name}</span>`;
    }
    return html;
}

export default sendOrderToAdminMail;