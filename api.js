const express = require('express')
const db = require('./db-config/db-connection').testConnection()
const app = express()
const router = express.Router()
const cors = require('cors');
const port = 4000
app.use(router)

// app.use(express.urlencoded({ extended: true }));

const user = require('./model/user')
const order = require('./model/order')
const orderChairs = require('./model/order-chairs')
const orderTables = require('./model/order-tables')
const orderTop = require('./model/order-tops')
router.use(express.json())
router.use(cors());
router.options('*', cors());


const validateData = (payload, res) => {
    if (!payload.name) {
        res.status(400).send({ message: 'name required' })
    }
    if (!payload.email) {
        res.status(400).send({ message: 'email required' })
  
    }
    if (!payload.product.length) {
        res.status(400).send({ message: 'product required' })
    }
}

const calculateAmount = (product) => {
    return product.reduce((pre, curr) => {
        return pre + curr.price
    }, 0)

}



router.post('/product', async (req, res) => {
    try {
        const body = req.body
        validateData(body, res)
        const userModel = {
            name: body.name,
            email: body.email
        }
        let u = await user.findOne({ where: { email: userModel.email } })
        if (!u) {
            u = await user.create(userModel);
        }


        if (u.id) {
            const orderModel = {
                amount: calculateAmount(body.product),
                user_id: u.id
            }
            const createOrder = await order.create(orderModel);
            if (createOrder.id) {
                const productModel = {
                    order_id: createOrder.id
                }
                for (let item of body.product) {

                    if (item.category == "Chairs") {
                        productModel.chair_id = item.id
                        const createOrder = await orderChairs.create(productModel);
                        delete productModel.chair_id
                    }
                    if (item.category == "Table") {
                        productModel.table_id = item.id
                        const createOrder = await orderTables.create(productModel);
                        delete productModel.table_id
                    }
                    if (item.category == "Top") {
                        productModel.top_id = item.id
                        const createOrder = await orderTop.create(productModel);
                        delete productModel.top_id
                    }
                }
            }

        }

        res.status(200).send({ message: 'Product Placed Successfully!' });
    } catch (err) {
        console.log(err)
    }

})





app.listen(port, (err) => {
    if (!err) {
        console.log(`server is running port ${port}`)
    }
})


