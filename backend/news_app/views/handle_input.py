import os

from django.http import JsonResponse

from google import genai

def main(request):
  api_key = os.environ.get('GEMINI_API_KEY')
  client = genai.Client()

  MODEL_NAME = 'gemini-2.5-flash'

  user_input = request.GET.get('input')
  data = {"status": 200, "input": user_input}
  return JsonResponse(data)