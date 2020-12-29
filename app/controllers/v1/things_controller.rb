class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '04156923849234782'
      }
    ]}.to_json
  end
end