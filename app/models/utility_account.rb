class UtilityAccount < ApplicationRecord
  belongs_to :energy_provider
  belongs_to :user
  has_many :consumption_entries, as: :consumption

  validates :password, presence: true
  validates :email, presence: true
  validates :meter_ref, presence: true
end
