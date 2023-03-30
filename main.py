from flask import Flask, render_template, request, session, redirect
# import requests as re
import asyncio
import aiohttp
import json
app = Flask(__name__)

# fetching dada
# product
'''
data = 'none'
async def data(parameter=''):

    # response1 = re.get(url+'?gender=girl').json()
    # response2 = re.get(url+'?gender=boy').json()
    # product_data = [response1['product'][0:10],response2['product'][0:10]]
    # return product_data
    async with aiohttp.ClientSession() as on_session:
        response = await on_session.get(url + parameter)
        data = await response.json()
        print(data['product'][:10])
    
# loop = asyncio.get_event_loop()
# loop.run_until_complete(data())
# loop.close()
# print(data,'1')
data = asyncio.run(data())
print(data)'''


@app.route('/')
def home():
    # fetch data from api and send to the html
    # list of quarys

    category_list = set()
    gender_list = set()
    product_list = []
    async def product_get():
        product_url = 'https://script.google.com/macros/s/AKfycbx3y_f-9SI7XlH2xotL6Ia2G55n0qUCBjwi4uG4VF_cj46ODB0Sti1F2KocpiwCZRHY/exec'
        async with aiohttp.ClientSession() as on_session:
            response = await on_session.get(product_url)
            data = await response.json()
            
            for i in data['product']:
                product_list.append(i)
                category_list.add(i['category'])
                gender_list.add(i['gender'])
    asyncio.run(product_get()) 
    print(gender_list, category_list, len(product_list))
    return render_template('index.html',category = category_list,gender= gender_list, products=product_list[0:10])


@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        number = request.form.get('number')
        password = request.form.get('passoword')
        change = False
        if(number!=None ):
            data = f'?number={number}'
        if(password!=None):
            data = f'?password={password}'
            change=True 
        async def statusget():
            status_code=None
            change_main = False
            url="https://script.google.com/macros/s/AKfycbyDhFLMFOMCAFv9MwRZ-qwVoTXDsefy9RBO34UcyUY8xaaWrEPKeyUsqeLXxTiC41Af/exec"+data    
            async with aiohttp.ClientSession() as varify_session:
                response = await varify_session.get(url)
                re = await response.json()   
                status_code = re['status']
                if(status_code == True and change==False):
                    change_main = False
                elif(status_code == True and change == True):
                    change_main = True
                return [status_code ,change_main]
        output = asyncio.run(statusget())
        # True = successfull()
        if(output[0]==True and output[1]==True):
            return redirect('/')
        print(output)
        return render_template('login.html', status = json.dumps(output[0]), change = json.dumps(output[1]))
    return render_template('login.html',status=json.dumps(None),change=json.dumps(None))



@app.route('/order')
def order():
    return render_template('order.html')


@app.route('/cart')
def cart():
    return render_template('cart.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/account')
def account():
    return render_template('account.html')


if __name__ == "__main__":
    app.run(debug=True)
