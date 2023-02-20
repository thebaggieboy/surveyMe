from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class SurveySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Poll
        fields = ['survey_title', 'choices', 'survey_type', 'date_created', 'slug']


class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ['choice']


class VoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vote
        fields = ['survey_title', 'choice', 'timestamp']
