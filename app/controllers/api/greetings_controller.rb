class Api::GreetingsController < Api::ApplicationController
    def index
        @greeting = Greeting.find(Greeting.pluck(:id).sample) 
        render json: @greeting
    end
  end