from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def HomePage(request):
    data = [
        {
            'name' : 'Epic Designs',
            'rating': 3.5,
            'rating_list':[0,0,0,0,0],
            'description': 'Passionate team of 4 designers working out of Bangalore with an experience of 4 years.',
            'projects': 57,
            'experience': 8,
            'price': '$$',
            'contacts': ['+91 - 984532853', '+91 - 984532854'],
            'hide':0,
            'shortlist':1,
        },
        {
            'name' : 'Studio - D3',
            'rating': 4.5,
            'rating_list':[0,0,0,0,0],
            'description': 'Passionate team of 4 designers working out of Bangalore with an experience of 4 years.',
            'projects': 43,
            'experience': 6,
            'price': '$$$',
            'contacts': ['+91 - 984532853', '+91 - 984532854'],
            'hide':0,
            'shortlist':1,
        },
        {
            'name' : 'House of designs',
            'rating': 3,
            'rating_list':[0,0,0,0,0],
            'description': 'Passionate team of 4 designers working out of Bangalore with an experience of 4 years.',
            'projects': 30,
            'experience': 10,
            'price': '$',
            'contacts': ['+91 - 984532853', '+91 - 984532854'],
            'hide':0,
            'shortlist':0,
        },
    ]

    for card in data:
        x = card['rating']

        for i in range(5):
            if x >= 1:
                card['rating_list'][i] = 'full-star'
            elif x == 0.5:
                card['rating_list'][i] = 'half-star'
            else:
                card['rating_list'][i] = 'empty-star'  

            x -= 1 

    context = {'data':data}

    return render(request, 'home.html', context)