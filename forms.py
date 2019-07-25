from django import forms


class MainForm(forms.Form):
    searchedSong = forms.CharField(label='Search for songs or lyrics...')

    def clean(self):
        all_clean_data = super(MainForm, self).clean()
        searchedSong = all_clean_data['searchedSong']


class ArtForm(forms.Form):
    searchedSinger = forms.CharField(label='Search for an artist...')

    def clean(self):
        all_clean_data = super(ArtForm, self).clean()
        searchedSong = all_clean_data['searchedSinger']


class RecForm(forms.Form):
    searchedPerson = forms.CharField(label='Type the name of an artist to get recommendations...')

    def clean(self):
        all_clean_data = super(RecForm, self).clean()
        searchedPerson = all_clean_data['searchedPerson']