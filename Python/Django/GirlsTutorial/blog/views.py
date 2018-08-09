from django.shortcuts import render
from .models import Post
from django.utils import timezone

def post_list(request):
    posts = Post.objects.all().order_by('crated_date')
    return render(request, 'blog/post_list.html', {'posts' : posts}) # posts라는 이름으로 모델데이터를 넘겨준다.