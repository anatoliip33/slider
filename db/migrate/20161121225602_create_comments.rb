class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :slide, index: true, foreign_key: true

      t.string :name, null: false
      t.text :content, null: false

      t.timestamps null: false
    end
  end
end
