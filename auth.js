const models = require('./models');
const bcrypt = require('bcrypt');

const injectSessionData = (req, uid) => {
    if(uid) {
        req.session['session-uid'] = uid;
    }
}
const injectIsAuthenticated = (req, res, next) => {
    req.isAuthenticated = req.session['session-uid'] && req.session['session-uid'] !== '';
    return next();
}
const emptySessionFromStore = (req, res, next) => {
    if(req.session['session-uid']) {
        req.session['session-uid'] = '';
    }
    return next();
}
const signin = (req, res) => {
    if(typeof req.body.username === 'undefined' || 
      req.body.username === '') {
        return res.status(500).send({
            msg: 'Invalid username'
        });
    } 
    if(typeof req.body.password === 'undefined' || 
      req.body.password === '') {
        return res.status(500).send({
            msg: 'Invalid password'
        })
    }
    const {
        username,
        password
    } = req.body;
    models.User.findOne({
        username        
    }, (err, resp) => {
        if(err || !resp) {
            return res.status(500).send({
                msg: 'Invalid username'
            })
        }
        else {
            if(!bcrypt.compareSync(password, resp.password))
                return res.status(500).send({
                    msg: 'Invalid password'
                })
            else {
                injectSessionData(req, username);     
                return res.status(200).send({
                    msg: 'Success'
                });
            }            
        }
    });       
}
const signup = (req, res) => {
    if(typeof req.body.username === 'undefined' || 
      req.body.username === '') {
        return res.status(500).send({
            msg: 'Invalid username'
        });
    } 
    if(typeof req.body.password === 'undefined' || 
      req.body.password === '') {
        return res.status(500).send({
            msg: 'Invalid password'
        })
    }
    if(typeof req.body.username === 'undefined' || 
      req.body.username === '') {
        return res.status(500).send({
            msg: 'Invalid username'
        });
    } 
    if(typeof req.body.emailId === 'undefined' || 
      req.body.emailId === '') {
        return res.status(500).send({
            msg: 'Invalid emailId'
        })
    }
    const {
        username,
        password,
        emailId
    } = req.body;
    let newUser = new models.User({
        username,
        password: bcrypt.hashSync(password, 14),
        emailId
    });
    newUser.save((err) => {
        if(err) {
            if(err.code === 11000)
                return res.status(500).send({
                    msg: 'The username already exists'
                });
            else
                return res.status(500).send({
                    msg: 'Something went wrong'
                })
        }
        else {
            injectSessionData(req, username);     
            return res.status(201).send({
                msg: 'Success'
            });
        }
    })
}
const userInfo = (req, res, next) => {
    if(req.isAuthenticated) {
        const username = req.session['session-uid'];
        models.User.findOne({
            username            
        }, "username emailId", (err, resp) => {
            if(err || !resp)
                return res.status(401);            
            else
                return res.status(200).send({
                    username: resp.username,
                    emailId: resp.emailId
                });
        });  
    }
    else 
        return res.status(401);
}
module.exports = {
    injectSessionData,
    injectIsAuthenticated,
    emptySessionFromStore,
    signin,
    signup,
    userInfo
}