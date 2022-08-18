class Api::MessagesController < ApplicationController
  def index
    @message = Message.order(Arel.sql('RANDOM()')).first.message
    render json: {
      message: @message
    }
  end
end
